import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/v/vpfegd3_c.css';
import '../../css/i/iu-dymbgg.css';
import '../../css/m/mvnpolbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="vpfegd3_c"/><path class="iu-dymbgg"/><path class="mvnpolbej"/>`,
		"fallback": "fontisto:wink",
	});
}

export default Component;
