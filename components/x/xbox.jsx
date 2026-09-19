import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ued0hpkml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ued0hpkml"/>`,
		"fallback": "fontisto:xbox",
	});
}

export default Component;
