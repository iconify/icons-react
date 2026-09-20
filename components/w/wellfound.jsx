import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-py2acpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-py2acpf"/>`,
		"fallback": "simple-icons:wellfound",
	});
}

export default Component;
