import { type ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { myQueryClient } from "../api/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const SuperProvider = ({children}:{children:ReactNode}) => {
    return(
        <QueryClientProvider client={myQueryClient} >
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
                position="bottom"
                buttonPosition="bottom-right"
            />
        </QueryClientProvider>
    )
}