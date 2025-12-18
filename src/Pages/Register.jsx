import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";


const Register = () => {

    const { registerWithEmailPassword, setUser } = useContext(AuthContext)
    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState('')
    const [upazila,setUpazila]=useState('')

    useEffect(() => {
        axios.get('./upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)
            })

        axios.get('./district.json')
            .then(res => {
                setDistricts(res.data.districts)
            })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photo
        const email = e.target.email.value;
        const password = e.target.password.value;
        const blood = e.target.blood.value;

        const file = photoURL.files[0]
        console.log(file)






        //image set up
        const res = await axios.post(`https://api.imgbb.com/1/upload?key=03547b8bc31e651ddb378b425d81e943`, { image: file }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        console.log(res.data.data.display_url)
        const mainPhotoUrl = res.data.data.display_url;
        const formData = {upazila, name, email, mainPhotoUrl, password, blood, district }

        console.log(formData)

        




        if (res.data.success == true) {
            // create register function 
            registerWithEmailPassword(email, password)
                .then(userCredential => {
                    //update user
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: mainPhotoUrl
                    }).then(() => {
                        setUser(userCredential.user)

                      
                        fetch('https://blood-web-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log("Server response:", data);
                            })
                            .catch(err => console.error(err));




                    }).catch((error) => {
                        console.log(error)
                    })
                    toast.success("User created successfully")

                })
                .catch(error => {
                    console.error("Registration Error:", error.message);
                });
        };
    }













    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />

                                <label className="label">Photo</label>
                                <input name='photo' type="file" className="input" placeholder="Upload your photo" />
                                <select name='blood' defaultValue="Choose Blood Group" className="select">
                                    <option value="">Choose Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>


                                <select
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    className="select"
                                >
                                    <option disabled value=''>Select Your District</option>

                                    {districts?.map(d => (
                                        <option value={d?.name} key={d.id}>
                                            {d?.name}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    value={upazila}
                                    onChange={(e) => setUpazila(e.target.value)}
                                    className="select"
                                >
                                    <option disabled value=''>Select Your Upazila</option>

                                    {upazilas?.map(d => (
                                        <option value={d?.name} key={d.id}>
                                            {d?.name}
                                        </option>
                                    ))}
                                </select>


                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input name='password' className="input" placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;