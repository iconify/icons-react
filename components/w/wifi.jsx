import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qk25gibme.css';
import '../../css/l/lbun2ugwc.css';
import '../../css/x/xlfsq7bzy.css';
import '../../css/e/eff0wfl9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qk25gibme"/><path class="lbun2ugwc"/><path class="xlfsq7bzy"/><path clip-rule="evenodd" class="eff0wfl9s"/></g>`,
		"fallback": "icon-park:wifi",
	});
}

export default Component;
