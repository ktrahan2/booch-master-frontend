import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default function NoMatch( { match }: RouteComponentProps ) {
    return (
        <div>
            Error Page Can't Be Found!
        </div>
    )
}
