import * as React from "react"
import {Suspense} from "react";
import Preloader from "../common/Preloader/Preloader";

export const WithSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}