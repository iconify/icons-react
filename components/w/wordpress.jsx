import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y85zfp33x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y85zfp33x"/>`,
		"fallback": "lineicons:wordpress",
	});
}

export default Component;
