import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iuwewxhtl.css';
import '../../css/i/ihvh-nbqm.css';
import '../../css/q/qmnemzcmc.css';
import '../../css/z/zdyur4b_z.css';
import '../../css/y/yc79_bcsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iuwewxhtl"/><path class="ihvh-nbqm"/><path class="qmnemzcmc"/><path class="zdyur4b_z"/><path class="yc79_bcsv"/></g>`,
		"fallback": "withicons-kawaii:zap",
	});
}

export default Component;
