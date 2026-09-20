import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vepb9acyv.css';
import '../../css/b/b416scm2a.css';
import '../../css/z/zpqifsyap.css';
import '../../css/f/fv4ug6bmv.css';
import '../../css/q/qfhgfbcix.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vepb9acyv"/><path class="b416scm2a"/><path class="zpqifsyap"/><path class="fv4ug6bmv"/><path class="qfhgfbcix"/></g>`,
		"fallback": "streamline-kameleon-color:windows-coding-duo",
	});
}

export default Component;
