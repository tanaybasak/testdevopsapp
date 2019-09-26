/* 
 * Application : TestDevopsApp
 * ClassName   : sys_script_client
 * Created On  : 2019-09-06 09:47:59
 * Created By  : admin
 * Updated On  : 2019-09-06 09:47:59
 * Updated By  : admin
 * URL         : /sys_script_client.do?sys_id=388547dcdb33330011c27a6139961989
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
var location = g_form.getValue('u_location_1');
	if(location=='' && newValue!=oldValue)
		{
	var caller = g_form.getValue('caller_id');
	var gldaj = new GlideAjax('global.GetUserLocation');
	gldaj.addParam('sysparm_name','getLocation');
	gldaj.addParam('sysparm_username',caller);
	gldaj.getXML(serverresponse);
	
	function serverresponse(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		
		g_form.setValue('u_location_1',answer);
		
	}
		} 
}
