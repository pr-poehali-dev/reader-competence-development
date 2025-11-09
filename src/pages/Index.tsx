import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const researchProjects = [
    {
      title: 'Формирование читательской компетенции младших школьников',
      year: '2023-2025',
      description: 'Исследование этапов развития читательских навыков у детей 6-10 лет с учётом возрастных особенностей восприятия литературных текстов.',
      keywords: ['педагогика', 'начальное образование', 'компетентностный подход'],
      status: 'В процессе'
    },
    {
      title: 'Методика анализа художественных текстов в начальной школе',
      year: '2022-2023',
      description: 'Разработка и апробация методических приёмов для формирования навыков литературного анализа у обучающихся начальных классов.',
      keywords: ['литературоведение', 'методика преподавания', 'младшие школьники'],
      status: 'Завершено'
    },
    {
      title: 'Цифровые технологии в обучении чтению',
      year: '2024-2025',
      description: 'Изучение эффективности применения интерактивных образовательных платформ для развития читательской грамотности.',
      keywords: ['цифровизация', 'образовательные технологии', 'читательская грамотность'],
      status: 'В процессе'
    }
  ];

  const publications = [
    {
      citation: 'Иванова, А. С. Этапы формирования читательской компетенции у детей младшего школьного возраста / А. С. Иванова // Педагогика и психология образования. – 2024. – № 2. – С. 45-58.',
      type: 'Статья в журнале ВАК',
      year: 2024
    },
    {
      citation: 'Иванова, А. С. Возрастные особенности восприятия литературных произведений младшими школьниками / А. С. Иванова, Б. П. Петров // Начальная школа. – 2023. – № 11. – С. 23-29.',
      type: 'Статья в журнале ВАК',
      year: 2023
    },
    {
      citation: 'Иванова, А. С. Методика работы с художественным текстом в начальных классах: монография / А. С. Иванова. – М.: Педагогика, 2023. – 256 с.',
      type: 'Монография',
      year: 2023
    },
    {
      citation: 'Ivanova, A. S. Reading competence formation in primary school: age-specific approach / A. S. Ivanova // International Journal of Educational Research. – 2024. – Vol. 125. – P. 102-115. DOI: 10.1016/j.ijer.2024.102115',
      type: 'Статья Scopus',
      year: 2024
    },
    {
      citation: 'Иванова, А. С. Развитие интереса к чтению у младших школьников через проектную деятельность / А. С. Иванова // Современные проблемы науки и образования: материалы международной научно-практической конференции. – СПб.: РГПУ им. А.И. Герцена, 2023. – С. 178-182.',
      type: 'Тезисы конференции',
      year: 2023
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-primary">Академический портал</div>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'home' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('research')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'research' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Исследования
              </button>
              <button
                onClick={() => scrollToSection('bibliography')}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === 'bibliography' ? 'text-accent' : 'text-foreground'
                }`}
              >
                Библиография
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
              Научные исследования<br />в области педагогики
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Изучение процессов формирования читательской компетенции и развития литературных навыков 
              у обучающихся начальной школы
            </p>
          </div>

          <Separator className="my-16" />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="text-accent" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Исследования</h3>
              <p className="text-sm text-muted-foreground">
                Актуальные научные проекты в области методики преподавания
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" className="text-accent" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Публикации</h3>
              <p className="text-sm text-muted-foreground">
                Статьи в журналах ВАК, Scopus и международных изданиях
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-accent" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Достижения</h3>
              <p className="text-sm text-muted-foreground">
                Участие в конференциях и научных мероприятиях
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Исследования</h2>
            <p className="text-lg text-muted-foreground">
              Текущие и завершённые научные проекты
            </p>
          </div>

          <div className="grid gap-6">
            {researchProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <Badge variant={project.status === 'В процессе' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{project.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="bibliography" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Библиография</h2>
            <p className="text-lg text-muted-foreground">
              Список научных публикаций в формате ГОСТ
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-semibold group-hover:bg-accent group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-foreground leading-relaxed mb-3">{pub.citation}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Академический портал. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
