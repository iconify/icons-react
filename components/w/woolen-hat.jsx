import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mw0vcbb6f.css';
import '../../css/r/r55hgqb1c.css';
import '../../css/r/r8r7mgbbj.css';
import '../../css/p/peqvy84ye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="mw0vcbb6f"/><path class="r55hgqb1c"/><circle class="r8r7mgbbj"/><path class="peqvy84ye"/></g>`,
		"fallback": "icon-park-outline:woolen-hat",
	});
}

export default Component;
