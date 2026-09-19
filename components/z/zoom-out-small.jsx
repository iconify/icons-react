import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eor_bpnfu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eor_bpnfu"/>`,
		"fallback": "dinkie-icons:zoom-out-small",
	});
}

export default Component;
