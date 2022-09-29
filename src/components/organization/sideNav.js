import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/dashboard.css";

export default function SideNav(props) {

    return (
        <>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <img src="/assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold text-white">Organizations Dashboard</span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {props.dashboard ?
                                (<Link className="nav-link text-white active bg-gradient-primary" to="/organization/dashboard">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </Link>)
                                : (<Link className="nav-link text-white" to="/organization/dashboard">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </Link>)}
                        </li>
                        <li className="nav-item">
                            {props.fund ?
                                (<Link className="nav-link text-white active bg-gradient-primary" to="/organization/funds">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Funds</span>
                                </Link>)
                                : (<Link className="nav-link text-white" to="/organization/funds">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">table_view</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Funds</span>
                                </Link>)}
                        </li>
                        <li className="nav-item">
                            {props.requests ?
                                (<Link className="nav-link text-white active bg-gradient-primary" to="/request/myrequest">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Requests</span>
                                </Link>)
                                : (<Link className="nav-link text-white" to="/request/myrequest">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">receipt_long</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Requests</span>
                                </Link>)}
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                        </li>
                        <li className="nav-item">
                            {props.requests ?
                                (<Link className="nav-link text-white active bg-gradient-primary" to="/organization/profile">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Profile</span>
                                </Link>)
                                : (<Link className="nav-link text-white" to="/organization/profile">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Profile</span>
                                </Link>)}
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3">
                        <a className="btn bg-gradient-primary mt-4 w-100" href="#" type="button">Log out</a>
                    </div>
                </div>
            </aside>
        </>
    );
}