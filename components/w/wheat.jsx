import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l-jn8moas.css';
import '../../css/n/nefmuxb7i.css';
import '../../css/e/ec07nutst.css';
import '../../css/d/diveyknpc.css';
import '../../css/e/egczxtb9e.css';
import '../../css/h/hzk5eacet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l-jn8moas"/><path class="nefmuxb7i"/><path class="ec07nutst"/><path class="diveyknpc"/><path class="egczxtb9e"/><path class="hzk5eacet wm-a"/></g>`,
		"fallback": "withicons:wheat",
	});
}

export default Component;
