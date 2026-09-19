import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uc-_c65-l.css';
import '../../css/r/r55hgqb1c.css';
import '../../css/g/gnkx5hbtb.css';
import '../../css/p/peqvy84ye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="uc-_c65-l"/><path class="r55hgqb1c"/><circle class="gnkx5hbtb"/><path class="peqvy84ye"/></g>`,
		"fallback": "icon-park-solid:woolen-hat",
	});
}

export default Component;
