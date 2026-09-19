import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hl37twb8p.css';
import '../../css/g/g9-w34b8m.css';
import '../../css/c/cevz4m89c.css';
import '../../css/i/iusogikjz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hl37twb8p"/><path clip-rule="evenodd" class="g9-w34b8m"/><rect class="cevz4m89c"/><rect class="iusogikjz"/></g>`,
		"fallback": "glyphs-poly:ying-yang",
	});
}

export default Component;
