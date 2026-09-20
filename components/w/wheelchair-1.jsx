import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxj6pdbgo.css';
import '../../css/k/kgd98phob.css';
import '../../css/r/r3hw_yb3n.css';
import '../../css/o/ohvme3bky.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxj6pdbgo"/><path class="kgd98phob"/><path class="r3hw_yb3n"/><path class="ohvme3bky"/></g>`,
		"fallback": "streamline-flex-color:wheelchair-1",
	});
}

export default Component;
