import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/k/kegbqu6mm.css';
import '../../css/j/jz9fog4wa.css';
import '../../css/w/wt0p3kbqh.css';
import '../../css/j/jzn7vac9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="co62ijjon"/><path clip-rule="evenodd" class="kegbqu6mm"/><path class="jz9fog4wa"/><path class="wt0p3kbqh"/><path class="jzn7vac9q"/></g>`,
		"fallback": "streamline-kameleon-color:webcam-pop",
	});
}

export default Component;
