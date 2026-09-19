import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gm4oombeh.css';
import '../../css/q/q1vdc4fgq.css';
import '../../css/h/he1sk-rbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG1T2ANbOv"><g class="ft5dv1b6b"><path class="gm4oombeh"/><path class="q1vdc4fgq"/><circle class="he1sk-rbq"/></g></mask></defs><path mask="url(#SVG1T2ANbOv)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:whale",
	});
}

export default Component;
