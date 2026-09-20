import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vepb9acyv.css';
import '../../css/r/rluboeqge.css';
import '../../css/t/tjxnvvb4m.css';
import '../../css/a/avglxfbzj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vepb9acyv"/><path class="rluboeqge"/><path class="tjxnvvb4m"/><path class="avglxfbzj"/></g>`,
		"fallback": "streamline-kameleon-color:wrench-2-duo",
	});
}

export default Component;
