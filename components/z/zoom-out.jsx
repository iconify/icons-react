import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o8be8xbcw.css';
import '../../css/x/x9ot73b2p.css';
import '../../css/h/hghintd6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="o8be8xbcw"/><path class="x9ot73b2p"/><path class="hghintd6i"/></g>`,
		"fallback": "icon-park:zoom-out",
	});
}

export default Component;
