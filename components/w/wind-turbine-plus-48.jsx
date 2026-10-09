import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6n0wxb9l.css';
import '../../css/w/watd-znrs.css';
import '../../css/m/mh_c9bcsf.css';
import '../../css/d/dvmkglt4m.css';
import '../../css/b/buz146btz.css';
import '../../css/r/ra60qxbml.css';
import '../../css/d/dq0waab5c.css';
import '../../css/v/v495yhqaj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6n0wxb9l"/><path class="watd-znrs"/><path class="mh_c9bcsf"/><path class="dvmkglt4m"/><path class="buz146btz"/><path class="ra60qxbml"/><path class="dq0waab5c"/><path class="v495yhqaj"/>`,
		"fallback": "energy-icons:wind-turbine-plus-48",
	});
}

export default Component;
