import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maluy0b6u.css';
import '../../css/g/gkvzxjbxs.css';
import '../../css/w/wvpuz6bnr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maluy0b6u"/><path clip-rule="evenodd" class="gkvzxjbxs"/><path class="wvpuz6bnr"/>`,
		"fallback": "qlementine-icons:zoom-fit-16",
	});
}

export default Component;
