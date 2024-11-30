'use client'

import * as React from "react";


type Props = {children:React.ReactNode};
type State = { hasError: boolean }

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error: any) {

        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);

    }

    render():React.ReactNode {

        if (this.state.hasError) {

            return (
                <div style={{ minHeight: 420, display: "flex", justifyContent: 'center', alignItems: 'center' }}>

                    <h2>Opps! There is an error</h2>
                    <button
                        type="button"
                        onClick={() => {
                            this.setState({ hasError: false })
                        }}
                    >
                        Try again
                    </button>


                </div>)
        }

        return this.props.children
    }


}