---
layout: page
title: Research
---

# Publications
All my publications can also be viewed on my [Google Scholar profile](https://scholar.google.com/citations?user=4987Pm4AAAAJ).

  <div class="publications-list">
    <div class="publication-item">
      <h3 class="paper-title">Neural Audio Synthesis of Realistic Piano Performances</h3>
      <div class="authors">
        <span class="author-name author-me">Lenny Renault</span>
      </div>
      <div class="venue">PhD Thesis, Sorbonne Université, 2024</div>
      <div class="paper-links">
        <a href="https://theses.hal.science/tel-04732963/" class="paper-link thesis">Paper</a>
        <a href="http://thesis-support-renault-b460f792019c9673b9a3b8b52c4d32d2ab7ae4b1.gitlab-pages.ircam.fr/" class="paper-link website">Website</a>
        <a href="https://www.youtube.com/live/p-Ee3pphlZ4?si=jLPMAGtr2m5SCdHA" class="paper-link video">Video</a>
      </div>
    </div>
    <div class="publication-item">
      <h3 class="paper-title">Expressive Piano Performance Rendering from Unpaired Data</h3>
      <div class="authors">
        <span class="author-name author-me">Lenny Renault</span>
        <span class="author-name">Rémi Mignot</span>
        <span class="author-name">Axel Roebel</span>
      </div>
      <div class="venue">DAFx 2023 (LBD)</div>
      <div class="paper-links">
        <a href="https://www.dafx.de/paper-archive/2023/DAFx23_paper_75.pdf" class="paper-link arxiv">Paper</a>
        <a href="http://renault.gitlab-pages.ircam.fr/dafx23/" class="paper-link website">Website</a>
      </div>
    </div>
    <div class="publication-item">
      <h3 class="paper-title">DDSP-Piano: a Neural Sound Synthesizer informed by Instrument Knowledge</h3>
      <div class="authors">
        <span class="author-name author-me">Lenny Renault</span>
        <span class="author-name">Rémi Mignot</span>
        <span class="author-name">Axel Roebel</span>
      </div>
      <div class="venue">Journal of the Audio Engineering Society, vol. 71, no.9, 2023</div>
      <div class="paper-links">
        <a href="https://aes2.org/publications/elibrary-page/?id=22231" class="paper-link arxiv">Paper</a>
        <a href="https://github.com/lrenault/ddsp-piano" class="paper-link code">Code</a>
        <a href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" class="paper-link website">Website</a>
      </div>
    </div>
    <div class="publication-item">
      <h3 class="paper-title">Differentiable Piano Model for MIDI-to-Audio Performance Synthesis</h3>
      <div class="authors">
        <span class="author-name author-me">Lenny Renault</span>
        <span class="author-name">Rémi Mignot</span>
        <span class="author-name">Axel Roebel</span>
      </div>
      <div class="venue">DAFx 2022, Best Paper Award</div>
      <div class="paper-links">
        <a href="https://www.dafx.de/paper-archive/2022/papers/DAFx20in22_paper_48.pdf" class="paper-link arxiv">Paper</a>
        <a href="https://github.com/lrenault/ddsp-piano" class="paper-link code">Code</a>
        <a href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" class="paper-link website">Website</a>
        <a href="https://www.youtube.com/watch?v=5uK-zI9pBC8" class="paper-link video">Video</a>
      </div>
    </div>
    <div class="publication-item">
      <h3 class="paper-title">Singing Language Identification using a Deep Phonotactic Approach</h3>
      <div class="authors">
        <span class="author-name author-me">Lenny Renault</span>
        <span class="author-name">Andrea Vaglio</span>
        <span class="author-name">Romain Hennequin</span>
      </div>
      <div class="venue">IEEE ICASSP 2021</div>
      <div class="paper-links">
        <a href="https://arxiv.org/pdf/2105.15014" class="paper-link arxiv">Paper</a>
        <a href="https://github.com/deezer/SingingLanguageIdentification" class="paper-link code">Dataset Split</a>
      </div>
    </div>
  </div>

---
# Community Services
- Reviewer for [DAFx24](https://dafx24.surrey.ac.uk/people/)
- Organizer for the [JJCAAS 2023](https://jjcaas2023.sciencesconf.org/resource/page/id/4)

<!-- DAFx 2023
<div id="unpair-perf-render_dafx23" class="paper">
    <div class="paper-info">
        <span class="paper-status-chip">DAFx 2023</span>
        <p class="paper-title">Expressive Piano Performance Rendering from Unpaired Data</p>
        <p class="paper-authors"><strong>Lenny Renault</strong>, Rémi Mignot, Axel Roebel</p>
        <p class="paper-status"><em>26th International Conference on Digital Audio Effects (DAFx23), September 2023</em></p>
        <div class="paper-data">
            <a class="paper-data-item" href="https://www.dafx.de/paper-archive/2023/DAFx23_paper_75.pdf" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx23/" target="_blank" rel="noopener noreferrer">&#127760; Website</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; Copy BibTeX</a>
        </div>
        <button class="paper-abstract-toggle" onclick='toggle_abstract(this)'>Click to read abstract</button>
        <p id="unpair-perf-render_dafx23_descr" class="paper-small-descr">Recent advances in data-driven expressive performance rendering have enabled automatic models to reproduce the characteristics and the variability of human performances of musical compositions. However, these models need to be trained with aligned pairs of scores and performances and they rely notably on score-specific markings, which limits their scope of application. This work tackles the piano performance rendering task in a low-informed setting by only considering the score note information and without aligned data. The proposed model relies on an adversarial training where the basic score notes properties are modified in order to reproduce the expressive qualities contained in a dataset of real performances. First results for unaligned score-to-performance rendering are presented through a conducted listening test. While the interpretation quality is not on par with highly-supervised methods and human renditions, our method shows promising results for transferring realistic expressivity into scores.</p>
        <div id="unpair-perf-render_dafx23_bibtex" style="display: none;">
            @inproceedings{renault2023unpaired_perf_render,
                title={Expressive Piano Performance Rendering from Unpaired Data},
                author={Renault, Lenny and Mignot, Rémi and Roebel, Axel},
                booktitle={Proc. of the 26th International Conference on Digital Audio Effects (DAFx23)},
                year={2023},
                month={September}
            }
        </div>
    </div>
</div>
-->
<!-- DAFx 2022 
<div id="diffpiano_dafx22" class="paper">
    <div class="paper-info">
        <span class="paper-status-chip">DAFx 2022</span>
        <p class="paper-title">Differentiable Piano Model for MIDI-to-Audio Performance Synthesis</p>
        <p class="paper-authors"><strong>Lenny Renault</strong>, Rémi Mignot, Axel Roebel</p>
        <p class="paper-status"><em>25th International Conference on Digital Audio Effects (DAFx20in22), September 2022</em></p>
        <div class="paper-data">
            <a class="paper-data-item" href="https://www.dafx.de/paper-archive/2022/papers/DAFx20in22_paper_48.pdf" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="https://github.com/lrenault/ddsp-piano" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Code</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" target="_blank" rel="noopener noreferrer">&#127760; Website</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; Copy BibTeX</a>
        </div>
        <button class="paper-abstract-toggle" onclick='toggle_abstract(this)'>Click to read abstract</button>
        <p id="diffpiano_dafx22_descr" class="paper-small-descr">Recent neural-based synthesis models have achieved impressive results for musical instrument sound generation. In particular, the Differentiable Digital Signal Processing (DDSP) framework enables the usage of spectral modeling analysis and synthesis techniques in fully differentiable architectures. Yet currently, it has only been used for modeling monophonic instruments. Leveraging the interpretability and modularity of this framework, the present work introduces a polyphonic differentiable model for piano sound synthesis, conditioned on Musical Instrument Digital Interface (MIDI) inputs. The model architecture is motivated by high-level acoustic modeling knowledge of the instrument which, in tandem with the sound structure priors inherent to the DDSP components, makes for a lightweight, interpretable and realistic sounding piano model. The proposed model has been evaluated in a listening test, demonstrating improved sound quality compared to a benchmark neural-based piano model, with significantly less parameters and even with reduced training data. The same listening test indicates that physical-modeling-based models still achieve better quality, but the differentiability of our lightened approach encourages its usage in other musical tasks dealing with polyphonic audio and symbolic data.</p>
        <div id="diffpiano_dafx22_bibtex" style="display: none;">
            @inproceedings{renault2022differentiable_piano,
                title={Differentiable Piano Model for MIDI-to-Audio Performance Synthesis},
                author={Renault, Lenny and Mignot, Rémi and Roebel, Axel},
                booktitle={Proc. of the 25th International Conference on Digital Audio Effects (DAFx20in22)},
                year={2022},
                month={September}
            }
        </div>
    </div>
</div>
-->
<!-- ICASSP 2021 
<div id="deep-phonotactic_icassp21" class="paper">
    <div class="paper-info">
        <span class="paper-status-chip">ICASSP 2021</span>
        <p class="paper-title">Singing Language Identification using a Deep Phonotactic Approach</p>
        <p class="paper-authors"><strong>Lenny Renault</strong>, Andrea Vaglio, Romain Hennequin</p>
        <p class="paper-status"><em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), June 2021</em></p>
        <div class="paper-data">
            <a class="paper-data-item" href="https://arxiv.org/pdf/2105.15014" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="https://github.com/deezer/SingingLanguageIdentification" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Dataset Split</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; Copy BibTeX</a>
        </div>
        <button class="paper-abstract-toggle" onclick='toggle_abstract(this)'>Click to read abstract</button>
        <p id="deep-phonotactic_icassp21_descr" class="paper-small-descr">Extensive works have tackled Language Identification (LID) in the speech domain, however their application to the singing voice trails and performances on Singing Language Identification (SLID) can be improved leveraging recent progresses made in other singing related tasks. This work presents a modernized phonotactic system for SLID on polyphonic music: phoneme recognition is performed with a Connectionist Temporal Classification (CTC)-based acoustic model trained with multilingual data, before language classification with a recurrent model based on the phonemes estimation. The full pipeline is trained and evaluated with a large and publicly available dataset, with unprecedented performances. First results of SLID with out-of-set languages are also presented.</p>
        <div id="deep-phonotactic_icassp21_bibtex" style="display: none;">
            @inproceedings{renault2021deep_phonotactic,
                author={Renault, Lenny and Vaglio, Andrea and Hennequin, Romain},
                booktitle={ICASSP 2021 - 2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)}, 
                title={Singing Language Identification Using a Deep Phonotactic Approach}, 
                year={2021},
                month={June},
                volume={},
                number={},
                pages={271-275},
                doi={10.1109/ICASSP39728.2021.9414203}
            }
        </div>
    </div>
</div>
-->

<!-- JAES 2023 
<div id="ddsppiano_jaes" class="paper">
    <div class="paper-info">
        <span class="paper-status-chip">JAES 2023</span>
        <p class="paper-title">DDSP-Piano: a Neural Sound Synthesizer informed by Instrument Knowledge</p>
        <p class="paper-authors"><strong>Lenny Renault</strong>, Rémi Mignot, Axel Roebel</p>
        <p class="paper-status"><em>Journal of the Audio Engineering Society, Volume 71, Issue 9, pp. 552-565, September 2023</em></p>
        <div class="paper-data">
            <a class="paper-data-item" href="https://aes2.org/publications/elibrary-page/?id=22231" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="https://github.com/lrenault/ddsp-piano" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Code</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" target="_blank" rel="noopener noreferrer">&#127760; Website</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; Copy BibTeX</a>
        </div>
        <button class="paper-abstract-toggle" onclick='toggle_abstract(this)'>Click to read abstract</button>
        <p id="ddsppiano_jaes_descr" class="paper-small-descr">Instrument sound synthesis using deep neural networks has received numerous improvements over the last couple of years. Among them, the Differentiable Digital Signal Processing (DDSP) framework has modernized the spectral modeling paradigm by including signal-based synthesizers and effects into fully differentiable architectures. The present work extends the applications of DDSP to the task of polyphonic sound synthesis, with the proposal of a differentiable piano synthesizer conditioned on MIDI inputs. The model architecture is motivated by high-level acoustic modeling knowledge of the instrument, which, along with the sound structure priors inherent to the DDSP components, makes for a lightweight, interpretable, and realistic-sounding piano model. A subjective listening test has revealed that the proposed approach achieves better sound quality than a state-of-the-art neural-based piano synthesizer, but physical-modeling-based models still hold the best quality. Leveraging its interpretability and modularity, a qualitative analysis of the model behavior was also conducted: it highlights where additional modeling knowledge and optimization procedures could be inserted in order to improve the synthesis quality and the manipulation of sound properties. Eventually, the proposed differentiable synthesizer can be further used with other deep learning models for alternative musical tasks handling polyphonic audio and symbolic data.</p>
        <div id="ddsppiano_jaes_bibtex" style="display: none;">
            @article{renault2023ddsp-piano:, 
                author={Renault, Lenny and Mignot, Rémi and Roebel, Axel}, 
                journal={Journal of the Audio Engineering Society}, 
                title={{DDSP-Piano: a Neural Sound Synthesizer informed by Instrument Knowledge}},
                year={2023}, 
                volume={71}, 
                issue={9}, 
                pages={552-565}, 
                month={September}
            }
        </div>
    </div>
</div>
-->

<!-- PhD Thesis
<div id="phd_SU2024" class="paper">
    <div class="paper-info">
        <span class="paper-status-chip">PhD Thesis - Sorbonne Université</span>
        <p class="paper-title">Neural Audio Synthesis of Realistic Piano Performances</p>
        <p class="paper-authors"><strong>Lenny Renault</strong></p>
        <p class="paper-status"><em>Sorbonne Université, 2024</em></p>
        <div class="paper-data">
            <a class="paper-data-item" href="https://theses.hal.science/tel-04732963/" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="http://thesis-support-renault-b460f792019c9673b9a3b8b52c4d32d2ab7ae4b1.gitlab-pages.ircam.fr/" target="_blank" rel="noopener noreferrer">&#127760; Website</a>
            <a class="paper-data-item" href="https://www.youtube.com/embed/p-Ee3pphlZ4?si=L2FodIUFwhSYHbR5" target="_blank" rel="noopener noreferrer">&#127760; Video</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; Copy BibTeX</a>
        </div>
        <button class="paper-abstract-toggle" onclick='toggle_abstract(this)'>Click to read abstract</button>
        <p id="phd_SU2024_descr" class="paper-small-descr">Musician and instrument make up a central duo in the musical experience. Inseparable, they are the key actors of the musical performance, transforming a composition into an emotional auditory experience. To this end, the instrument is a sound device, that the musician controls to transcribe and share their understanding of a musical work. Access to the sound of such instruments, often the result of advanced craftsmanship, and to the mastery of playing them, can require extensive resources that limit the creative exploration of composers. This thesis explores the use of deep neural networks to reproduce the subtleties introduced by the musician's playing and the sound of the instrument, making the music realistic and alive. Focusing on piano music, the conducted work has led to a sound synthesis model for the piano, as well as an expressive performance rendering model. DDSP-Piano, the piano synthesis model, is built upon the hybrid approach of Differentiable Digital Signal Processing (DDSP), which enables the inclusion of traditional signal processing tools into a deep learning model. The model takes symbolic performances as input and explicitly includes instrument-specific knowledge, such as inharmonicity, tuning, and polyphony. This modular, lightweight, and interpretable approach synthesizes sounds of realistic quality while separating the various components that make up the piano sound. As for the performance rendering model, the proposed approach enables the transformation of MIDI compositions into symbolic expressive interpretations. In particular, thanks to an unsupervised adversarial training, it stands out from previous works by not relying on aligned score-performance training pairs to reproduce expressive qualities. The combination of the sound synthesis and performance rendering models would enable the synthesis of expressive audio interpretations of scores, while enabling modification of the generated interpretations in the symbolic domain.</p>
        <div id="phd_SU2024_bibtex" style="display: none;">
            @phdthesis{renault:tel-04732963,
                title = {{Neural audio synthesis of realistic piano performances}},
                author = {Renault, Lenny},
                url = {https://theses.hal.science/tel-04732963},
                number = {2024SORUS196},
                school = {{Sorbonne Universit{\'e}}},
                year = {2024},
                month = {July},
                TYPE = {Theses},
                Paper = {https://theses.hal.science/tel-04732963v1/file/139429_RENAULT_2024_archivage.pdf},
                HAL_ID = {tel-04732963},
                HAL_VERSION = {v1},
            }
        </div>
    </div>
</div>
-->