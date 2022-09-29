import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getNFunds } from '../../../api/fund.api';
import { getOrganizationByID } from '../../../api/organization.api';
import NavButton from '../../NavButton';
import LatestContributions from "../dashboard/LatestContributions";
import FundCard from './FundCard';
import NewFundraisings from './NewFundraisings';

export default function Profile() {
    const params = useParams();
    const [organizationID, setOrganizationID] = useState("631b45ab9d2dc36d4c12a8f3");
    const [organization, setOrganization] = useState({ registrationDate: "2022-09-27T12:20:02.029+00:00" });
    const [fundraisings, setFundraisings] = useState([]);

    // console.log("organizationID: " + organizationID);

    useEffect(() => {
        getOrganizationByID(organizationID)
            .then((res) => {
                // console.log(res.data.organization);
                setOrganization(res.data.organization);
            }).catch((err) => {
                console.log(err);
            })

        // get latest 4 fundraisings
        getNFunds(4)
            .then((res) => {
                // console.log(res.data.funds);
                setFundraisings(res.data.funds);
            }).catch((err) => {
                console.log(err);
            })
    }, [organizationID]);

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };

    return (
        <>
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton page="Profile" path="Organization" />
                <div className="container-fluid py-4 " onClick={toggleSidenav}>
                    <div className="card card-body">
                        <div className="row gx-4 mb-2">
                            <div className="col-auto">
                                <div className="avatar avatar-xl position-relative">
                                    {/* <img src="../assets/img/bruce-mars.jpg" alt="profile_image" className="w-100 border-radius-lg shadow-sm" /> */}
                                    <i className="material-icons fs-1 position-relative text-secondary">apartment</i>
                                </div>
                            </div>
                            <div className="col-auto my-auto">
                                <div className="h-100">
                                    <h5 className="mb-1">
                                        {organization.name}
                                    </h5>
                                    <p className="mb-0 font-weight-normal text-sm">
                                        Organization
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-lg-2 col-sm-3 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3">
                                <div className="nav-wrapper position-relative end-0">
                                    <ul className="nav nav-pills nav-fill p-1 btn btn-outline-primary" role="tablist">
                                        <li className="nav-item">
                                            <Link className="nav-link mb-0 px-0 py-1 text-primary">
                                                <i className="material-icons text-lg position-relative">remove</i>
                                                <span className="ms-1">Unregister</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-md-6 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0 fs-5">Organization Information</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    <a href="javascript:;">
                                                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="horizontal full-dark m-0" />
                                        <div className="card-body p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.name}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Address:</strong> &nbsp; {organization.address}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Country:</strong> &nbsp; {organization.country}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Zip code:</strong> &nbsp; {organization.zipCode}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.email}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Contact Number:</strong> &nbsp; {organization.contactNumber}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Registraion Number:</strong> &nbsp; {organization.registrationNumber}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Registraion Date:</strong> &nbsp; {new Date(organization.registrationDate).toISOString().split('T')[0]}</li>
                                                {/* <li className="list-group-item border-0 ps-0 pb-0">
                                                    <strong className="text-dark text-sm">Social:</strong> &nbsp;
                                                    <a className="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-facebook fa-lg"></i>
                                                    </a>
                                                    <a className="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-twitter fa-lg"></i>
                                                    </a>
                                                    <a className="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                                                        <i className="fab fa-instagram fa-lg"></i>
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-md-8 d-flex align-items-center">
                                                    <h6 className="mb-0 fs-5">Board Member Details</h6>
                                                </div>
                                                <div className="col-md-4 text-end">
                                                    <a href="javascript:;">
                                                        <i className="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="horizontal full-dark m-0" />
                                        <div className="card-body p-3">
                                            <ul className="list-group">
                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><h6 className="mb-0 fs-6">President's Details</h6></li>
                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.presidentName}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {organization.presidentContactNumber}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.presidentEmail}</li>

                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm mt-3"><h6 className="mb-0 fs-6">Secretary's Details</h6></li>
                                                <li className="list-group-item border-0 ps-0 pt-0 text-sm"><strong className="text-dark">Name:</strong> &nbsp; {organization.secretaryName}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Mobile:</strong> &nbsp; {organization.secretaryContactNumber}</li>
                                                <li className="list-group-item border-0 ps-0 text-sm"><strong className="text-dark">Email:</strong> &nbsp; {organization.secretaryEmail}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card card-plain h-100">
                                        <LatestContributions />
                                    </div>
                                </div>
                                <NewFundraisings limit={4} organizationId={organizationID}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}