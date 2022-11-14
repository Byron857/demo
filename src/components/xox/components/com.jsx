import React, { Fragment, useEffect, useState } from 'react'
import { Tree, Pagination, Switch } from 'antd';

function Com(props) {
  let sss=`{"status":"success","msg":"request success","code":100000,"data":{"pageNum":1,"pageSize":10,"pageCount":1,"dataCount":8,"list":[{"ci_id":"78F130BCAADB4E0197228909F23FA69B","note":"","levelOfProtection":"04","update_time":1622632590281,"softwareCategory":"YYGJQTG000","ci_name":"app7","applySystemIdentifiers":"78F130BCAADB4E0197228909F23FA69B","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test7","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"8B082228AD0247889571C3894DD83EDD","note":"","levelOfProtection":"00","update_time":1622632586635,"softwareCategory":"YYGJQDL000","ci_name":"app8","applySystemIdentifiers":"8B082228AD0247889571C3894DD83EDD","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test8","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"33018E58BA76474E92B060A324128E23","note":"","levelOfProtection":"99","update_time":1622631968084,"softwareCategory":"YYGJJCS000","ci_name":"app6","applySystemIdentifiers":"33018E58BA76474E92B060A324128E23","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test6","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"FF0A386B8A764B4F982157EF019A2F9D","note":"","levelOfProtection":"00","update_time":1622631964379,"softwareCategory":"YYGJGXL000","ci_name":"app5","applySystemIdentifiers":"FF0A386B8A764B4F982157EF019A2F9D","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test5","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"B2E25442AB534BBAAE78B79974DA3293","note":"","levelOfProtection":"01","update_time":1622631958536,"softwareCategory":"YYGJCWL000","ci_name":"app4","applySystemIdentifiers":"B2E25442AB534BBAAE78B79974DA3293","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test4","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"166284B4665C45728F8A07E9377624B2","note":"","levelOfProtection":"00","update_time":1622631879619,"softwareCategory":"YYGJJCL000","ci_name":"app3","applySystemIdentifiers":"166284B4665C45728F8A07E9377624B2","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test3","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"00"},{"ci_id":"B4D03809C7334B9085DDF678AEDDA3C4","note":"","levelOfProtection":"03","update_time":1622631875871,"softwareCategory":"YYGJKHL000","ci_name":"app2","applySystemIdentifiers":"B4D03809C7334B9085DDF678AEDDA3C4","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test2","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"},{"ci_id":"2A6802A59FC145459B3D6BEDBD9B362B","note":"","levelOfProtection":"02","update_time":1622631791026,"softwareCategory":"YYGJZHY000","ci_name":"app1","applySystemIdentifiers":"2A6802A59FC145459B3D6BEDBD9B362B","softwareOwnershipAgency":"C0000000000000","applicationProfile":"test1","QUOTE_TEST":{"ciId":"558815DAA5FF445690E0738A2751C229","ciName":""},"model_id":"application","brandLand":"01"}]}}`
  const jsonFormat=(str='')=>{
    str=String(str)
    str=str.replace(/\,/g, `,
    `)
    str=str.replace(/\{/g,`{
    `)
    str=str.replace(/\}/g,`
    }`)
    str=str.replace(/\[/g,`[
    `)
    str=str.replace(/\]/g,`
    ]`)
    return <pre>{str}</pre>
  }
  return (
    <Fragment>
      {jsonFormat(sss)}
    </Fragment>
  )
}

export default Com

















