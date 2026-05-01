import { DarkLightBoddy } from "./dl-body"
import { DarkLightHeader } from "./dl-header"
import { DarkLightProvider } from "./context/dl-context"

export const DarkLightPage = () => {
    return(
        <DarkLightProvider>
            <div className="py-10 mx-2 w-full">
                <DarkLightHeader />
                <DarkLightBoddy />
            </div>
        </DarkLightProvider>
    )
}