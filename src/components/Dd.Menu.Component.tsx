import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

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
                <article>
                    <div>
                    <span>{"service here"}</span>
                    <Link to={{
                        pathname: "/dashboard"
                    }}>{
                        "service id"
                    }</Link>
                    </div>
                </article>
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