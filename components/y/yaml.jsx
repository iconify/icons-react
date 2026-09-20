import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md_1n2bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md_1n2bqe"/>`,
		"fallback": "material-icon-theme:yaml",
	});
}

export default Component;
