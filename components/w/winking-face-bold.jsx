import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p77rup82s.css';
import '../../css/f/fvbg_kbkx.css';
import '../../css/a/ashondbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="p77rup82s"/><path class="fvbg_kbkx"/><path class="ashondbvf"/></g>`,
		"fallback": "iconamoon:winking-face-bold",
	});
}

export default Component;
