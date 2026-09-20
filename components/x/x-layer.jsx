import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuma_8b1z.css';
import '../../css/m/m0f02wb3t.css';
import '../../css/x/xq54x2m2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuma_8b1z"/><path class="m0f02wb3t"/><path class="xq54x2m2o"/>`,
		"fallback": "token:x-layer",
	});
}

export default Component;
