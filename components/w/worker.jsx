import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dy4ahachf.css';
import '../../css/g/g7-kjbbtk.css';
import '../../css/y/ydo6tprvv.css';
import '../../css/a/arzr-hbli.css';
import '../../css/h/hg8_y1bry.css';
import '../../css/c/cz4ujikiv.css';
import '../../css/g/gk27t5blw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="dy4ahachf"/><path class="g7-kjbbtk"/><path class="ydo6tprvv"/><path class="arzr-hbli"/><path class="hg8_y1bry"/><path class="cz4ujikiv"/><path class="gk27t5blw"/></g>`,
		"fallback": "icon-park:worker",
	});
}

export default Component;
