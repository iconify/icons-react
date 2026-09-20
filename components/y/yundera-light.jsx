import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmm4mibxx.css';
import '../../css/i/i2a_ir9nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmm4mibxx"/><path class="i2a_ir9nf"/>`,
		"fallback": "selfhst:yundera-light",
	});
}

export default Component;
