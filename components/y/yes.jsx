import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjec9ou5t.css';
import '../../css/z/z9fhmbbzq.css';
import '../../css/x/xom1eccnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjec9ou5t"/><path class="z9fhmbbzq"/><path class="xom1eccnq"/>`,
		"fallback": "token:yes",
	});
}

export default Component;
