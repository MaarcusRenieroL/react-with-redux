import React from "react";
import Button from "../components/Button";
import {GoBell, GoCloud} from "react-icons/go";

export default function ButtonPage() {

    return (
        <div>
            <div>
                <Button primary className={"mb-5"}>
                    <GoBell />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloud />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success>
                    <GoBell />
                    Success
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoCloud />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoBell />
                    Danger
                </Button>
            </div>
        </div>
    )
}