import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iti6oabld.css';
import '../../css/r/r55hgqb1c.css';
import '../../css/v/v_mrg_w2s.css';
import '../../css/p/peqvy84ye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4qpBsbof"><g class="rohhhzb0l"><rect class="iti6oabld"/><path class="r55hgqb1c"/><circle class="v_mrg_w2s"/><path class="peqvy84ye"/></g></mask></defs><path mask="url(#SVG4qpBsbof)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:woolen-hat",
	});
}

export default Component;
