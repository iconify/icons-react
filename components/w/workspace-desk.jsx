import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-0yl8bbv.css';
import '../../css/y/y6q57qbvj.css';
import '../../css/i/ilu-e1xuu.css';
import '../../css/b/b11qjab4v.css';
import '../../css/l/ljn_g8bng.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-0yl8bbv"/><path class="y6q57qbvj"/><path class="ilu-e1xuu"/><path class="b11qjab4v"/><path class="ljn_g8bng"/></g>`,
		"fallback": "streamline-flex-color:workspace-desk",
	});
}

export default Component;
