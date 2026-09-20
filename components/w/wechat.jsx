import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2e-zacas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2e-zacas"/>`,
		"fallback": "selfhst:wechat",
	});
}

export default Component;
