import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec7pwm9zi.css';
import '../../css/w/wdns3gx2m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec7pwm9zi"/><path class="wdns3gx2m"/>`,
		"fallback": "selfhst:yoink",
	});
}

export default Component;
