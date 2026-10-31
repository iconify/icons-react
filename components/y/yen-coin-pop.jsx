import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/f/f02zrv9vw.css';
import '../../css/d/dk7h4tb6r.css';
import '../../css/c/cljixmbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="f02zrv9vw"/><path class="dk7h4tb6r"/><path class="cljixmbcp"/></g>`,
		"fallback": "streamline-kameleon-color:yen-coin-pop",
	});
}

export default Component;
