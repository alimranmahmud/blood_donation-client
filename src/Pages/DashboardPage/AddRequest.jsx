
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AddRequest = () => {

    const { user } = useContext(AuthContext)
    const [upazilas, setUpazilas] = useState([])
    const [districts, setDistricts] = useState([])
    const [district, setDistrict] = useState('')
    const [upazila, setUpazila] = useState('')

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axios.get('/upazila.json')
            .then(res => {
                setUpazilas(res.data.upazilas)
            })

        axios.get('/district.json')
            .then(res => {
                setDistricts(res.data.districts)
            })
    }, [])

    const handleRequest = (e) => {
        e.preventDefault()
        const form = e.target;
        const register_name = form.requester_name.value;
        const requester_email = form.requester_email.value;
        const recipient_name = form.recipient_name.value;
        const recipient_district = district
        const recipient_upazila = upazila
        const hospital_name = form.hospital_name.value;
        const full_address = form.full_address.value;
        const blood_group = form.blood_group.value;

        const formData = {
            register_name, requester_email, recipient_name, recipient_district, recipient_upazila, hospital_name, full_address, blood_group, donation_status: 'pending'
        }


        axiosSecure.post('/requests', formData)
            .then(res => {
                alert(res.data.insertedId)
            }).catch(err => console.log(err))










    }





    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Blood Donation Request Form
            </h2>

            <form onSubmit={handleRequest} className="space-y-4">

                {/* Requester Name */}
                <div>
                    <label className="label">Requester Name</label>
                    <input
                        name="requester_name"
                        type="text"
                        className="input input-bordered w-full"
                        value={user?.displayName}
                        readOnly
                    />
                </div>

                {/* Requester Email */}
                <div>
                    <label className="label">Requester Email</label>
                    <input
                        name="requester_email"
                        type="email"
                        className="input input-bordered w-full"
                        value={user?.email}
                        readOnly
                    />
                </div>

                {/* Recipient Name */}
                <div>
                    <label className="label">Recipient Name</label>
                    <input
                        name="recipient_name"
                        type="text"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* District */}
                <div>
                    <label className="label">Recipient District</label>
                    <select name="recipient_district" value={district} onChange={(e) => setDistrict(e.target.value)} className="select select-bordered w-full">
                        <option disabled value=''>Select Your District</option>

                        {districts?.map(d => (
                            <option value={d?.name} key={d.id}>
                                {d?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upazila */}
                <div>
                    <label className="label">Recipient Upazila</label>
                    <select name="recipient_upazila" value={upazila} onChange={(e) => setUpazila(e.target.value)} className="select select-bordered w-full">
                        <option disabled value=''>Select Your Upazila</option>

                        {upazilas?.map(d => (
                            <option value={d?.name} key={d.id}>
                                {d?.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Hospital */}
                <div>
                    <label className="label">Hospital Name</label>
                    <input
                        name="hospital_name"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Dhaka Medical College Hospital"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="label">Full Address Line</label>
                    <input
                        name="full_address"
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Zahir Raihan Rd, Dhaka"
                    />
                </div>

                {/* Blood Group */}
                <div>
                    <label className="label">Blood Group</label>
                    <select name="blood_group" className="select select-bordered w-full">
                        <option value="">-- Select Blood Group --</option>
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
                </div>

                {/* Date */}
                <div>
                    <label className="label">Donation Date</label>
                    <input type="date" className="input input-bordered w-full" />
                </div>

                {/* Time */}
                <div>
                    <label className="label">Donation Time</label>
                    <input type="time" className="input input-bordered w-full" />
                </div>

                {/* Message */}
                <div>
                    <label className="label">Request Message</label>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="Explain why you need blood..."
                    ></textarea>
                </div>

                {/* Button */}
                <button className="btn btn-error w-full text-white">
                    Request
                </button>

            </form>
        </div>
    );
};

export default AddRequest;
