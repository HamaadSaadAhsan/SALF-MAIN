import {SlLocationPin} from "react-icons/sl";
import {GrPhone} from "react-icons/gr";
import CustomDropdown from "@/Components/CustomDropdown.jsx";

const ContactHeader = ({className, phoneNumber}) => {
    return (
        <div className={className}>
            <div className="">
                <CustomDropdown name="English" color="white" children={[
                    {
                        name: 'Spanish',
                        href: ''
                    }
                ]}/>
            </div>
            <div className="d-flex gap-2">
                <span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.1943 21.9469C14.3147 21.7573 13.4294 21.5791 12.5593 21.3517C12.0766 21.2153 11.6046 21.0436 11.1471 20.838C10.605 20.6124 10.4097 20.1802 10.6031 19.7157C10.7964 19.2513 11.2305 19.094 11.7783 19.2608C12.7811 19.5679 13.7725 19.9527 14.8 20.1309C16.4207 20.4114 18.0036 20.2314 19.3893 19.2115C20.4262 18.4533 20.5266 17.4012 19.5788 16.5576C19.0026 16.0377 18.3758 15.5767 17.7079 15.1814C16.9231 14.7208 16.144 14.8629 15.4805 15.4999C14.9649 15.9946 14.4625 16.5027 13.9526 17.0031C13.4048 17.5377 13.1735 17.5718 12.4892 17.2135C10.3236 16.0476 8.41374 14.4594 6.87247 12.5427C6.08489 11.5356 5.3582 10.4822 4.6963 9.38839C4.33613 8.8197 4.41953 8.53157 4.88586 8.04818C5.39578 7.5231 5.92466 7.01886 6.42131 6.4824C7.09236 5.76207 7.24022 5.06258 6.73409 4.21903C6.26767 3.46275 5.72317 2.75751 5.10954 2.11489C4.56739 1.53483 3.61958 1.60307 3.05279 2.17934C2.26749 2.99218 1.80173 4.061 1.74102 5.18959C1.49838 8.07093 2.58268 10.5504 4.1314 12.8725C5.21905 14.4728 6.55671 15.8879 8.09325 17.0638C8.65056 17.4998 8.74155 18.0722 8.33589 18.4741C7.9833 18.8229 7.56627 18.8191 7.07151 18.4343C5.20479 16.9912 3.60699 15.2304 2.35141 13.2327C1.25763 11.4887 0.455786 9.63103 0.137322 7.57807C-0.21716 5.24267 0.0558099 3.04943 1.65382 1.17845C2.83479 -0.201565 4.80055 -0.411979 6.17488 0.772785C7.26107 1.71112 8.17476 2.81816 8.56716 4.24936C8.72978 4.79751 8.74804 5.37838 8.62017 5.93567C8.49231 6.49296 8.22265 7.00778 7.83734 7.43021C7.38618 7.95909 6.88953 8.44626 6.38529 8.97893C8.0148 11.6996 10.2946 13.9729 13.02 15.5947C13.3309 15.2553 13.6304 14.8971 13.9678 14.571C15.598 12.9616 17.2719 12.7834 19.1808 14.0611C19.8022 14.5015 20.393 14.9835 20.9494 15.5037C21.5029 15.9946 21.7285 16.6752 21.918 17.3652V18.2428C21.8612 18.4324 21.8062 18.6068 21.7493 18.7888C21.3493 20.0532 20.3674 20.7621 19.2376 21.2531C18.4509 21.5867 17.5827 21.7289 16.7506 21.9564L15.1943 21.9469Z"
                        fill="white"/>
                    <path
                        d="M21.9321 10.7361C21.8753 10.8081 21.8203 10.8839 21.7615 10.9541C21.5265 11.2403 21.2326 11.3977 20.8649 11.2858C20.6808 11.2422 20.5177 11.1354 20.4042 10.9841C20.2906 10.8327 20.2336 10.6464 20.2431 10.4574C20.2431 9.59681 20.2621 8.7324 20.19 7.87748C20.063 6.38562 19.1039 5.32028 17.6139 5.15726C16.5144 5.03783 15.3922 5.13451 14.1184 5.13451C14.6017 5.58756 14.9998 5.95531 15.3922 6.33065C15.6614 6.58845 15.9363 6.84436 16.1846 7.12302C16.343 7.27869 16.4337 7.49042 16.4373 7.71247C16.4408 7.93451 16.3569 8.14903 16.2035 8.30968C15.868 8.65847 15.3922 8.66226 14.9828 8.30968C14.9449 8.27745 14.9107 8.24143 14.8766 8.20731C14.1639 7.49835 13.4397 6.79697 12.7384 6.07474C12.4998 5.84118 12.3105 5.56214 12.1816 5.25413C12.0528 4.94611 11.9871 4.61539 11.9883 4.28152C11.9895 3.94765 12.0577 3.61742 12.1888 3.31038C12.32 3.00333 12.5113 2.7257 12.7516 2.49391C13.4568 1.77357 14.1752 1.0684 14.8937 0.361334C15.3354 -0.0708684 15.8093 -0.104989 16.1846 0.255179C16.5599 0.615347 16.5277 1.1101 16.1031 1.5461C15.6273 2.03517 15.1325 2.50528 14.6491 2.98677C14.5411 3.09482 14.4425 3.21424 14.2605 3.41139H16.9296C19.6119 3.41139 21.3445 4.84259 21.8582 7.48129C21.8742 7.52655 21.8965 7.56931 21.9245 7.6083L21.9321 10.7361Z"
                        fill="white"/>
                    </svg>
                </span>
                <a href="" className="text-sm">
                    Callback
                </a>
            </div>
            <div className="d-flex gap-2">
                <span>
                    <svg width="22" height="22" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.2511 23C14.3682 22.8014 13.4797 22.6126 12.6063 22.3763C12.1224 22.2316 11.6487 22.0517 11.1888 21.8379C10.6446 21.5996 10.4486 21.1467 10.6427 20.66C10.8368 20.1733 11.2725 20.0084 11.8224 20.1852C12.8289 20.505 13.824 20.9103 14.8553 21.095C16.4821 21.389 18.0709 21.2023 19.4618 20.1336C20.5026
                        19.339 20.6034 18.2345 19.6521 17.3525C19.0736 16.8084 18.4445 16.3259 17.7741 15.9124C16.9864 15.4297 16.2043 15.5767 15.5384 16.2441C15.0209 16.7646 14.5166 17.2969 14.0048 17.8194C13.4549 18.3815 13.2228 18.4153 12.5359 18.0418C10.3626 16.8194 8.44572 15.1552 6.89817
                        13.1473C6.10757 12.0905 5.37816 10.9854 4.71386 9.83784C4.35234 9.24191 4.43606 8.94195 4.90413 8.43342C5.41596 7.88517 5.94682 7.35479 6.44533 6.79461C7.11889 6.03778 7.2673 5.30478 6.75928 4.4228C6.2921 3.62957 5.74549 2.89044 5.12865 2.21785C4.58447 1.60801 3.63312 1.67952
                        3.06421 2.2834C2.28017 3.13373 1.81433 4.24949 1.75134 5.42794C1.50779 8.44733 2.60565 11.0456 4.15066 13.479C5.24039 15.1597 6.58178 16.6466 8.12352 17.8829C8.68292 18.3378 8.77425 18.9377 8.36707 19.3589C8.01316 19.7263 7.59457 19.7204 7.09796 19.3191C5.22512 17.8059 3.62149 15.9609 2.3602 13.8683C1.26234 12.0408 0.457491 10.0941 0.137835
                        7.94277C-0.217972 5.49548 0.0560186 3.19518 1.66001 1.23456C2.8454 -0.21157 4.81851 -0.432065 6.19797 0.811448C7.28823 1.79275 8.20534 2.95482 8.5992 4.45259C8.76261 5.02699 8.78104 5.63574 8.65269 6.21977C8.52434 6.80379 8.25357 7.34327 7.86665 7.78584C7.41381 8.34006 6.9153 8.85256 6.40918 9.41075C8.04502 12.2611 10.3334 14.6426 13.0687 16.3414C13.3807 15.9859 13.6813 15.6104 14.02 15.2688C15.6564 13.5823 17.3365 13.3956 19.2525 14.7344C19.8758 15.1972 20.4689 15.7029 21.0277 16.2481C21.5833
                        16.7606 21.8097 17.4757 22 18.1988V19.1165C21.9429 19.3152 21.8877 19.4979 21.8307 19.6886C21.4292 21.0136 20.4436 21.7585 19.3096 22.261C18.5199 22.6107 17.6485 22.7596 16.8132 23H15.2511Z"
                        fill="white"/>
                    </svg>
                </span>
                <a href={`tel:${phoneNumber}`} className="text-sm">{phoneNumber}</a>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <SlLocationPin className="text-white" size="20"/>
                <a href="" className="text-sm">Locations</a>
            </div>
        </div>
    )
}


export default ContactHeader
