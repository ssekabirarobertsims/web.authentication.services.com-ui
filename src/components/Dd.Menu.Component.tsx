import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import CloseDropDownMenu from "../functions/Close.Dd.Menu.Function";

interface MenuValuePropTypes {
    id: string;
    value: string;
    link: string;
}

const DdMenuComponent: React.FunctionComponent = () => {
    const [menuValues, setMenuValues] = React.useState<MenuValuePropTypes[]>([
        {
            id: v4(),
            value: "Home",
            link: "/"
        },
        {
            id: v4(),
            value: "Dashboard",
            link: "/dashboard"
        },
        {
            id: v4(),
            value: "Guide",
            link: "/guide"
        },
        {
            id: v4(),
            value: "Login",
            link: "/service/login"
        },
        {
            id: v4(),
            value: "Signup",
            link: "/service/registration"
        },
    ] as MenuValuePropTypes[]);

    useEffect(() => setMenuValues(menuValues), [menuValues]);

    return <>
        <aside className={String("dd-menu-component").toLocaleLowerCase()}>
            <div className={String("dd-menu-component-content-wrapper").toLocaleLowerCase()}>
                <span onClick={(event) => {
                    event.stopPropagation();
                    CloseDropDownMenu();
                }}><CgClose /></span>
                <ul>
                    {
                        menuValues.map((element: MenuValuePropTypes) => (
                            <li key={v4() as string}>
                                <Link to={{
                                    pathname: element?.link
                                }}>
                                    {
                                        element?.value
                                    }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </aside>
    </>
}

export default DdMenuComponent;