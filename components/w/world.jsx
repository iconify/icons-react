import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naq8hacyq.css';
import '../../css/y/yj8iwvbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naq8hacyq"/><path class="yj8iwvbgv"/>`,
		"fallback": "fontisto:world",
	});
}

export default Component;
