import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ullszbbqu.css';
import '../../css/d/dy4_z9gcp.css';
import '../../css/y/yfs8wlcdx.css';
import '../../css/l/lf_p4sb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ullszbbqu"/><path class="dy4_z9gcp"/><path class="yfs8wlcdx"/><path clip-rule="evenodd" class="lf_p4sb4d"/>`,
		"fallback": "solar:wi-fi-router-bold",
	});
}

export default Component;
