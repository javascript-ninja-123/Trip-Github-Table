import React from 'react';
import {  Table} from 'semantic-ui-react'
import {dateConverter} from '../../utils'
import {UseFetchContext} from '../../hooks'
import "./Table.css"

export const TableComponent = React.memo(() => {
    const {dispatch,state: {data}} = UseFetchContext() 
    const renderBody = () => {
      return Array.isArray(data) && data.reduce((acc,val,i) => {
  
        const extractLabelNames = () => Array.isArray(val.labels) && val.labels.reduce((acc,val,i) => {
          const newVal = (
            <li key={i}>
              {val.name}
            </li>
          )
          acc.push(newVal)
          return acc
        },[])
  
        const newVal = (
          <Table.Row key={`${i}-${val.id}`}>
            <Table.Cell>{val.number}</Table.Cell>
            <Table.Cell>{val.title}</Table.Cell>
            <Table.Cell>{dateConverter(val.created_at)}</Table.Cell>
            <Table.Cell>{dateConverter(val.updated_at)}</Table.Cell>
            <Table.Cell><ul>{extractLabelNames()}</ul></Table.Cell>
            <Table.Cell>{val.state}</Table.Cell>
          </Table.Row>
        )
        acc.push(newVal)
        return acc;
      },[])
    }
  
    const onClick = (name) => {
      dispatch({type:UseFetchContext.types.SORT, payload: name})
    } 
  
    return (
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell  onClick={() => onClick('number')}>Issue Number</Table.HeaderCell>
          <Table.HeaderCell onClick={() => onClick('title')}>Title</Table.HeaderCell>
          <Table.HeaderCell onClick={() => onClick('created_at')}>Created At</Table.HeaderCell>
          <Table.HeaderCell onClick={() => onClick('updated_at')}>Updated At</Table.HeaderCell>
          <Table.HeaderCell className="no-hover">Labels</Table.HeaderCell>
          <Table.HeaderCell onClick={() => onClick('state')} className="no-hover">State</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
        {renderBody()}
      </Table.Body>
  
      <Table.Footer>
    
      </Table.Footer>
    </Table>
    )  
  })