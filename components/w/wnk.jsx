import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyq886b0l.css';
import '../../css/d/dc0_ty-6m.css';
import '../../css/c/c5hn-ccrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyq886b0l"/><path class="dc0_ty-6m"/><path class="c5hn-ccrw"/>`,
		"fallback": "token:wnk",
	});
}

export default Component;
