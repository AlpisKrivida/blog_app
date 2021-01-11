import React from 'react'
import {useRouteMatch} from 'react-router-dom'

export interface AuditCompareRouteParams {
    page: string | undefined;
  }

const generatePage = (page:any) => {
    const component = () => require(`./pages/${page}`).default
    console.log(page);
    try {
        return React.createElement(component());
    } catch (err) {
        console.warn(err);
        // return React.createElement(component());
        return React.createElement('div', null, 400)
    }
}

export default function PageRenderer () {
    const {
        params: {page}
    } = useRouteMatch<AuditCompareRouteParams>()

    return generatePage(page)
}