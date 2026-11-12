import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqk752b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqk752b2o"/>`,
		"fallback": "selfhst:yoink-dark",
	});
}

export default Component;
