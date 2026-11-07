import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/awfs1dbya.css';
import '../../css/p/p5yzyacqb.css';
import '../../css/q/qla0packm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="awfs1dbya"/><path class="p5yzyacqb"/></g><path clip-rule="evenodd" class="qla0packm"/>`,
		"fallback": "solar:wi-fi-router-minimalistic-bold-duotone",
	});
}

export default Component;
